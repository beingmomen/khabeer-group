<template>
  <Table :title="$t('app')" :cols="tableHeader" :module-name="moduleName">
    <template #form>
      <form class="grid grid-cols-6 gap-4">
        <Input
          class="col-start-1 col-end-7"
          :label="$t('arrivingArabicName')"
          store-key="arrivingArabicName"
          :module-name="moduleName"
        />
        <Input
          class="col-start-1 col-end-7"
          :label="$t('arrivingEnglishName')"
          store-key="arrivingEnglishName"
          :module-name="moduleName"
        />
        <Input
          class="col-start-1 col-end-7"
          :label="$t('sort')"
          store-key="sort"
          :module-name="moduleName"
          type="number"
        />
      </form>
    </template>
  </Table>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const moduleName = "dashboard";
const tableHeader = computed(() => {
  const header = [
    {
      key: "arrivingArabicName",
      name: t("arrivingArabicName"),
    },
    {
      key: "arrivingEnglishName",
      name: t("arrivingEnglishName"),
    },
    {
      key: "sort",
      name: t("sort"),
    },
  ];
  return header;
});
</script>

<style lang="scss" scoped></style>
