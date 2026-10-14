// Sample data for the UrlShortener demo frame. Nothing here comes from a backend.
const DAY_MS = 24 * 60 * 60 * 1000;

const dayNumber = (timestamp: number) => Math.floor(timestamp / DAY_MS);

export const dayToDate = (day: number) => new Date(day * DAY_MS);

export const SITE_URL = "https://url-shortener-web-nu.vercel.app";
export const siteHost = new URL(SITE_URL).host;

export const PRO_URL = "https://shop.acme.com/sale/october-2026";
export const ALIAS = "promo-oct";
export const API_CODE = "w4n8hjd";
export const CURL = `curl -X POST https://api.urlshortener.com/v1/shorten \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{"url": "https://docs.acme.com/getting-started"}'`;
export const RESPONSE = `{
  "shortLink": "https://${siteHost}/${API_CODE}",
  "code": "${API_CODE}",
  "clicks": 0
}`;

// Length of each scene, the moments its caption changes, the moment the activity side
// panel opens and the widest activity range of the plan, in milliseconds and days.
export const SCENES = {
  pro: {
    total: 15500,
    marks: [2600, 4100, 6200, 9800],
    activity: 6200,
    activityDays: 90,
  },
  developer: {
    total: 16000,
    marks: [3800, 5400, 6800, 10400],
    activity: 6800,
    activityDays: 365,
  },
} as const;

export type DemoPlan = keyof typeof SCENES;

export const demoPlans = Object.keys(SCENES) as DemoPlan[];

export const ACTIVITY_RANGES = [7, 30, 90, 365] as const;
export type ActivityRange = (typeof ACTIVITY_RANGES)[number];

// The range the activity side panel opens with.
export const INITIAL_RANGE: ActivityRange = 30;

export const BREAKDOWNS = ["countries", "referrers", "devices"] as const;
type Breakdown = (typeof BREAKDOWNS)[number];

export const OTHER = "other";

export const sampleLinks = [
  {
    code: "launch",
    isAlias: true,
    destination: "https://shop.acme.com/launch",
    clicks: 932,
    createdAt: "2026-10-02T12:00:00Z",
  },
  {
    code: "k7m2xqp",
    isAlias: false,
    destination: "https://acme.com/blog/short-links-guide",
    clicks: 1284,
    createdAt: "2025-09-18T12:00:00Z",
  },
  {
    code: API_CODE,
    isAlias: false,
    destination: "https://docs.acme.com/getting-started",
    clicks: 417,
    createdAt: "2025-09-05T12:00:00Z",
  },
  {
    code: "bio",
    isAlias: true,
    destination: "https://acme.com/about",
    clicks: 268,
    createdAt: "2025-08-21T12:00:00Z",
  },
];

type SampleLink = (typeof sampleLinks)[number];

// The short link whose activity both scenes open: it is over a year old.
export const openedLink = sampleLinks[1];

// The day the demo happens on.
export const SAMPLE_TODAY = "2026-10-13T12:00:00Z";
const sampleToday = dayNumber(Date.parse(SAMPLE_TODAY));

// The clicks of one UTC day.
type ClickDay = { day: number; clicks: number } & Record<
  Breakdown,
  Record<string, number>
>;

// One bar of the chart: the clicks of one or several consecutive days.
type Bar = ClickDay & { lastDay: number };

// A row of a breakdown, which the chart can be filtered by.
export type Share = {
  breakdown: Breakdown;
  // The stored value, or `other` for everything beyond the rows shown.
  value: string;
  // Values that `other` gathers; empty for any other row.
  gathered: string[];
  percent: number;
};

// What the activity side panel shows for one range, ready to paint.
export type ActivityView = {
  range: ActivityRange;
  axis: [top: string, middle: string];
  // Height of each bar as a percentage of the axis, for all the clicks and for the
  // ones of the focused row.
  heights: number[];
  focusedHeights: number[];
  clicks: string;
  focusedClicks: string;
  focusLabel: string;
  ticks: string[];
  barSize: string;
  shares: { label: string; percent: number }[][];
};

const MAX_BARS = 30;
export const SHARE_ROWS = 4;

// How the sample clicks split, most frequent first.
const SPLITS = {
  countries: { CO: 34, MX: 22, ES: 15, US: 12, AR: 8, CL: 5, PE: 4 },
  referrers: {
    direct: 37,
    "instagram.com": 24,
    "google.com": 17,
    "x.com": 12,
    "linkedin.com": 6,
    "youtube.com": 4,
  },
  devices: { mobile: 61, desktop: 33, tablet: 6 },
};

export const daysPerBar = (range: number) => Math.ceil(range / MAX_BARS);

// Splits `total` by `weights` in whole numbers that add up to it. `carry`
// keeps the fractions owed to each key between calls.
function split(
  total: number,
  weights: Record<string, number>,
  carry: Record<string, number>,
): Record<string, number> {
  const keys = Object.keys(weights);
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  const parts: Record<string, number> = {};
  let left = total;

  for (const key of keys) {
    const exact = (total * (weights[key] ?? 0)) / sum + (carry[key] ?? 0);
    const part = Math.min(Math.max(Math.floor(exact), 0), left);
    carry[key] = exact - part;
    if (part > 0) parts[key] = part;
    left -= part;
  }
  while (left > 0) {
    const owed = keys.reduce((a, b) =>
      (carry[b] ?? 0) > (carry[a] ?? 0) ? b : a,
    );
    parts[owed] = (parts[owed] ?? 0) + 1;
    carry[owed] = (carry[owed] ?? 0) - 1;
    left -= 1;
  }

  return parts;
}

// The clicks of a sample link day by day since it was created. Always the same
// for a link: most of them are recent, weekends dip and each day varies a little.
function sampleClickDays(link: SampleLink): ClickDay[] {
  const firstDay = dayNumber(Date.parse(link.createdAt));
  const weights: Record<string, number> = {};
  for (let day = firstDay; day <= sampleToday; day += 1) {
    const age = (day - firstDay) / Math.max(sampleToday - firstDay, 1);
    // Day 0 was a Thursday, so 2 and 3 are the weekend.
    const weekend = day % 7 === 2 || day % 7 === 3 ? 0.6 : 1;
    const noise = 0.7 + ((Math.imul(day, 2654435761) >>> 16) % 13) / 20;
    weights[day] = (0.3 + age ** 2) * weekend * noise;
  }

  const clicks = split(link.clicks, weights, {});
  const carries = { countries: {}, referrers: {}, devices: {} };

  return Object.entries(clicks).map(([day, count]) => ({
    day: Number(day),
    clicks: count,
    countries: split(count, SPLITS.countries, carries.countries),
    referrers: split(count, SPLITS.referrers, carries.referrers),
    devices: split(count, SPLITS.devices, carries.devices),
  }));
}

function add(
  totals: Record<string, number>,
  counts: Record<string, number>,
): void {
  for (const [value, clicks] of Object.entries(counts)) {
    totals[value] = (totals[value] ?? 0) + clicks;
  }
}

// The last `range` days of the opened link as 30 bars at most, oldest first.
export function toBars(range: ActivityRange): Bar[] {
  const size = daysPerBar(range);
  const firstDay = sampleToday - range + 1;
  const bars: Bar[] = [];

  for (let day = firstDay; day <= sampleToday; day += size) {
    bars.push({
      day,
      lastDay: Math.min(day + size - 1, sampleToday),
      clicks: 0,
      countries: {},
      referrers: {},
      devices: {},
    });
  }

  for (const clickDay of sampleClickDays(openedLink)) {
    const bar = bars[Math.floor((clickDay.day - firstDay) / size)];
    if (!bar) continue;

    bar.clicks += clickDay.clicks;
    for (const breakdown of BREAKDOWNS) {
      add(bar[breakdown], clickDay[breakdown]);
    }
  }

  return bars;
}

// The values with the most clicks of a breakdown, and the rest as `other`.
export function toShares(bars: readonly Bar[], breakdown: Breakdown): Share[] {
  const totals: Record<string, number> = {};
  for (const bar of bars) add(totals, bar[breakdown]);

  const total = Object.values(totals).reduce((sum, n) => sum + n, 0);
  if (total === 0) return [];

  const ranked = Object.entries(totals).sort(([, a], [, b]) => b - a);
  const shown = ranked.slice(0, SHARE_ROWS);
  const rest = ranked.slice(SHARE_ROWS);
  const restClicks = rest.reduce((sum, [, clicks]) => sum + clicks, 0);

  const share = (value: string, clicks: number, gathered: string[]): Share => ({
    breakdown,
    value,
    gathered,
    percent: Math.round((clicks / total) * 100),
  });

  return [
    ...shown.map(([value, clicks]) => share(value, clicks, [])),
    ...(restClicks > 0
      ? [share(OTHER, restClicks, rest.map(([value]) => value))]
      : []),
  ];
}

// Clicks of each bar that belong to one row of a breakdown.
export function clicksOf(bars: readonly Bar[], share: Share): number[] {
  const values = share.value === OTHER ? share.gathered : [share.value];

  return bars.map((bar) =>
    values.reduce((sum, value) => sum + (bar[share.breakdown][value] ?? 0), 0),
  );
}

// "Round" top for the axis: 1, 2 or 5 times a power of ten.
export function niceMax(value: number): number {
  const power = 10 ** Math.floor(Math.log10(Math.max(value, 1)));
  const step = [1, 2, 5, 10].find((option) => option * power >= value) ?? 10;
  return Math.max(step * power, 2);
}
