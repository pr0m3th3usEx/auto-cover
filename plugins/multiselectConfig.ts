export default defineNuxtPlugin(() => {
  return {
    provide: {
      multiselectClasses: {
        options: 'flex flex-col p-0 m-0 list-none text-black',
        search:
          'w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-yankees-blue rounded pl-3.5 rtl:pl-0 rtl:pr-3.5',
        tagsSearch:
          'absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full bg-yankees-blue',
      },
    },
  };
});
