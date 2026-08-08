import type { TranslationKey } from "../i18n/ui";

interface SkillBadge {
  title: TranslationKey;
  description: TranslationKey;
  button: TranslationKey;
}

export const badgeSkillCtaegories: TranslationKey[] = [
  "skill.badge.title",
  "skill.badge.description",
  "skill.badge.button",
];

export const skillBadge: SkillBadge[] = [
  {
    title: "skill.badge.title",
    description: "skill.badge.description",
    button: "skill.badge.button",
  },
];
