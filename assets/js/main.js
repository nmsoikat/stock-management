window.onload = () => {
  const leftSidebar = document.getElementById('leftSidebar')
  const close = document.getElementById('close')
  const menu = document.getElementById('menu')

  menu.addEventListener('click', () =>{
    leftSidebar.style.display = 'block';
    leftSidebar.style.zIndex = '2';
  })

  close.addEventListener('click', () =>{
    leftSidebar.style.display = 'none';
  })

}