document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.delete-button').forEach(btn => {
    btn.addEventListener('click', function addDeleteDataId(evt) {
      const id = evt.currentTarget.getAttribute('record-id');
      const deleteBtn = document.getElementById('confirm-delete-button');

      deleteBtn.setAttribute('form', `delete-${id}`)
    })
  })
})