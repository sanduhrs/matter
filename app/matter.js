const mdc = window.mdc || false;

// Auto Initialize elements that have been defined in the templates.
mdc.autoInit();

/* Initialize the Drawer Component */
const drawerEl = document.querySelector('.mdc-temporary-drawer');
const MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
const matter_drawer = new MDCTemporaryDrawer(drawerEl);
document.querySelector('.matter' +
  '-menu').addEventListener('click', function() {
  matter_drawer.open = !matter_drawer.open;
});

/* Initialize and provide sync with native select element */
const MDCSelect = mdc.select.MDCSelect;

const selectList = document.querySelectorAll('.mdc-select');
for (var i = 0, l = selectList.length; i < l; i++) {
  const select = new MDCSelect(selectList[i]);
  const parentNode = selectList[i].parentNode;
  const nativeSelect = parentNode.querySelector('select');
  select.listen('MDCSelect:change', () => {
    nativeSelect.value = select.selectedOptions[0].id;
  });
}

/* Bind dropbuttons with their SimpleMenus */
const MDCSimpleMenu = mdc.menu.MDCSimpleMenu;

const dropbuttonList = document.querySelectorAll('.icon--button-dropbutton');
for (var i = 0, l = dropbuttonList.length; i < l; i++) {
  const parentNode = dropbuttonList[i].parentNode;
  const menuNode = parentNode.querySelector('.mdc-simple-menu');
  let simpleMenu = new MDCSimpleMenu(menuNode);
  dropbuttonList[i].addEventListener('click', () => simpleMenu.open = !simpleMenu.open);
}