function toggleSeal(id){
  const el=document.getElementById(id);
  if(!el)return;
  el.classList.toggle('open');
  const btn=el.previousElementSibling;
  if(btn)btn.textContent=el.classList.contains('open')?'Hide seal':'Verify seal';
}
