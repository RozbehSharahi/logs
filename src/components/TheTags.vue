<template>
  <div>
    <div class="mb-10">
      <the-button label="Add tag" @click="methods.addTag" />
    </div>
    <div v-for="tag in tags" :key="tag.getLabel()" class="tag">
      <span>{{ tag.getLabel() }}</span>
      <span @click="methods.deleteTag(tag)" class="ml-5 cursor-pointer">
        (x)
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import TheButton from "@/components/TheButton.vue";
import { computed, defineComponent, reactive } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import { Tag } from "@/model/tag";
import { modalService } from "@/modals/modal-service";

export default defineComponent({
  components: { TheButton },
  setup() {
    const services = reactive({
      modalService,
      database: fileStore.getDatabase(),
    });

    const methods = {
      addTag: async () => {
        services.modalService.open({
          component: await import("./TheTagForm.vue"),
          properties: { tag: new Tag({ label: "" }) },
          listeners: {
            commit: async (tag: Tag) => {
              await services.database.create("tag", tag);
              services.modalService.pop();
            },
          },
        });
      },
      deleteTag: async (tag: Tag) => {
        services.database.delete("tag", tag);
      },
    };

    return {
      services,
      methods,
      tags: computed(() => services.database.all("tag") as Tag[]),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/scss/variables";
.tag {
  padding: 0.3em 2em;
  display: inline-block;
  background-color: transparentize($primary, 0.9);
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}
</style>
