var $taskList = document.querySelector('.task-list');

function target(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target && event.target.tagName === 'BUTTON') {
    var $item = event.target.closest('.task-list-item');
    console.log('closest list item: ', $item);
    $item.remove();
  }
}

$taskList.addEventListener('click', target);
