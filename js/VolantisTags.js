// 去除banner
var full_page = document.getElementsByClassName('full_page')
if (full_page.length != 0) {
  full_page[0].style.background = 'transparent'
}

// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById('mobile-sidebar-menus')
var menus_item_child =
  mobile_sidebar_menus.getElementsByClassName('menus_item_child')
var menus_expand = mobile_sidebar_menus.getElementsByClassName('menus-expand')
for (var i = 0; i < menus_item_child.length; i++) {
  menus_item_child[i].style.display = 'none'
  menus_expand[i].className += ' menus-closed'
}
