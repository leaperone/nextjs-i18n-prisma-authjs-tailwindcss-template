"use client";
import { Label, ListBox, Select } from "@heroui/react";
import { useTranslation } from "@/i18n/client";
import { languages } from "@/i18n/settings";
import { switchLocaleAction } from "@/i18n/switch-locale";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("home");

  const handleLocaleChange = (value: string | null) => {
    if (value) {
      switchLocaleAction(value);
    }
  };

  return (
    <Select
      defaultValue={i18n.resolvedLanguage ?? null}
      onChange={(value) => handleLocaleChange(value as string | null)}>
      <Label className="sr-only">Select language</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {languages.map((language) => (
            <ListBox.Item key={language.value} id={language.value} textValue={language.label}>
              {language.label}
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
