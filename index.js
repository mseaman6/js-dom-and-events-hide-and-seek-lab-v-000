function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //return document.getElementById('nested').getElementsByClassName('target')[0];
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n);
  }
}

function deepestChild() {
  const grandnode = document.querySelector('#grand-node');
  let child = grandnode.children[0];
  let mostDeepChild;
  function deeperChild(child) {
    if (!!child.children[0]) {
      mostDeepChild = child.children[0];
      deeperChild(mostDeepChild);
    };
    return mostDeepChild
  };
  return deeperChild(child);
}
