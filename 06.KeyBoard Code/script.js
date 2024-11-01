const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Name</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td> ${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});
