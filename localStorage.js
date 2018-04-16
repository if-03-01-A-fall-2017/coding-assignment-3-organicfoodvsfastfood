window.onload = function()
{
    let storeButton = document.getElementById("store-to-localStorage");
    storeButton.onclick = function()
    {
      let name = document.getElementById('name');
      let password = document.getElementById('password');
      let unemployed = document.getElementById('unemployed');
      let sysadmin = document.getElementById('sysadmin');

      localStorage.setItem(name.id,name.value);
      localStorage.setItem(password.id,password.value);
      localStorage.setItem(unemployed.id,unemployed.checked);
      localStorage.setItem(sysadmin.id,sysadmin.checked);
    }

    let loadButton = document.getElementById("load");
    loadButton.onclick = function()
    {
      let name = document.getElementById('name');
      let password = document.getElementById('password');
      let unemployed = document.getElementById('unemployed');
      let sysadmin = document.getElementById('sysadmin');

      name.value = localStorage.getItem(name.id);
      password.value = localStorage.getItem(password.id);
      unemployed.value = localStorage.getItem(unemployed.id);
      sysadmin.value = localStorage.getItem(sysadmin.id);
    }

    let removeButton = document.getElementById("delete");
    removeButton.onclick = function()
    {
      let name = document.getElementById('name');
      let password = document.getElementById('password');
      let unemployed = document.getElementById('unemployed');
      let sysadmin = document.getElementById('sysadmin');

      localStorage.removeItem(name.id,name.value);
      localStorage.removeItem(password.id,password.value);
      localStorage.removeItem(unemployed.id,unemployed.checked);
      localStorage.removeItem(sysadmin.id,sysadmin.checked);
    }

}
