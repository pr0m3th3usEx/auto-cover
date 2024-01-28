<template>
  <NuxtLayout name="generation" title="Skills" subtitle="Test" :step-index="1">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <FormKit
        ref="formRef"
        type="form"
        form-class="flex w-full gap-1"
        :actions="false"
        :incomplete-message="false"
        @submit="submitHandler"
      >
        <FormKit
          name="skills"
          :type="skillsInput"
          validation="required"
          input-class="text-input !w-full"
          outer-class="w-full"
          label="Seperate your skills using a comma"
          label-class="block text-white mb-4"
          :validation-messages="{
            required: 'You should add at least 1 skill',
          }"
        />
      </FormKit>

      <!-- Ajouter le listing des compétences ajoutées -->

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const formRef = ref<HTMLFormElement>();

const onNext = () => {
  const node = formRef.value?.node;
  node?.submit();
};

const onPrev = () => navigateTo({ path: '/generate/identity' });

const addHandlers = (node: FormKitNode) => {
  node.on('created', () => {
    if (node.context) {
      // Append value on comma input
      node.context.handlers.checkEnd = (event: InputEvent) => {
        event.preventDefault();
        if (event.target) {
          const value = (event.target as HTMLInputElement).value;

          if (value.length > 0 && value[value.length - 1] === ',') {
            // Using Set object to remove duplicates
            node.input([...new Set([value.split(',')[0].trim(), ...((node._value as []) ?? [])])]);

            // Clear field value
            (event.target as HTMLInputElement).value = '';
          }
        }
      };

      // Append value thanks to 'Add' button
      node.context.handlers.addSkill = (e: Event) => {
        e.preventDefault();
        const skillInput = document.getElementById('skillInput') as HTMLInputElement;

        if (skillInput && skillInput.value.length > 0) {
          node.input([...new Set([skillInput.value.trim(), ...((node._value as []) ?? [])])]);
          // Clear field value
          skillInput.value = '';
        }
      };

      // Remove skill
      node.context.handlers.removeSkill = (e: PointerEvent) => {
        e.preventDefault();
        if (e.target) {
          const v = (e.target as HTMLDivElement).getAttribute('data-v');
          node.input((node._value as []).filter((e) => e !== v));
        }
      };
    }
  });
};

const schema = [
  {
    $el: 'div',
    attrs: {
      class: 'flex w-full gap-1 mb-4',
    },
    children: [
      {
        $el: 'input',
        attrs: {
          id: 'skillInput',
          class: '$classes.input',
          placeholder: 'Ex: C#, Marketing Strategy, Adobe Illustrator...',
          onInput: '$handlers.checkEnd',
        },
        type: 'text',
      },
      {
        $el: 'button',
        attrs: {
          class: 'button button-primary',
          onClick: '$handlers.addSkill',
          'data-v': '$skill',
        },
        children: 'Ajouter',
      },
    ],
  },
  {
    $el: 'div',
    attrs: {
      class: 'flex flex-wrap gap-4',
    },
    children: [
      {
        $el: 'div',
        for: ['skill', '$value'],
        attrs: {
          class: 'flex button button-primary cursor-pointer hover:!bg-pine-green items-center',
          onClick: '$handlers.removeSkill',
          'data-v': '$skill',
        },
        children: [
          '$skill',
          {
            $el: 'span',
            attrs: {
              class: 'h-5 w-5 !text-white icon-[uil--times] pointer-events-none',
            },
          },
        ],
      },
    ],
  },
];

const skillsInput = createInput(schema, {
  features: [addHandlers],
});

const submitHandler = (data: SkillsForm) => {
  console.log(data);

  navigateTo({ path: '/generate/education' });
};
</script>
