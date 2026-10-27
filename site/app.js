const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service;document.querySelector('#enquiry-review').hidden=true;}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(other=>{other.classList.toggle('active',other===button);other.setAttribute('aria-pressed',String(other===button));});document.querySelectorAll('.gallery figure').forEach(item=>{item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter;});}));
const lightbox=document.querySelector('#lightbox');
let lightboxTrigger;
document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>{lightboxTrigger=button;const image=document.querySelector('#lightbox-image');image.src=button.dataset.image;image.alt=button.querySelector('img').alt;document.querySelector('#lightbox-caption').textContent=button.dataset.caption;lightbox.showModal();}));
document.querySelector('#close-lightbox')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',event=>{if(event.target===lightbox){const box=lightbox.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)lightbox.close();}});
lightbox?.addEventListener('close',()=>lightboxTrigger?.focus());
const form=document.querySelector('#enquiry-form');
const dateInput=document.querySelector('#occasion-date');
if(dateInput){const now=new Date();dateInput.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
form?.addEventListener('input',()=>{document.querySelector('#enquiry-review').hidden=true;});
form?.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const service=document.querySelector('#service').value;const name=document.querySelector('#enquiry-name').value.trim();const message=document.querySelector('#enquiry-message').value.trim();const date=dateInput.value;const parts=[`Hello BeauteFest!${name?' I’m '+name+'.':''}`,`I’d like to enquire about: ${service}.`];if(date){const parsed=new Date(date+'T12:00:00');parts.push(`Occasion date: ${parsed.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}.`);}if(message)parts.push(message);parts.push('Please share availability and the next steps. Thank you!');const text=parts.join('\n\n');document.querySelector('#enquiry-preview').textContent=text;document.querySelector('#whatsapp-send').href='https://wa.me/919914193973?text='+encodeURIComponent(text);const review=document.querySelector('#enquiry-review');review.hidden=false;review.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});});
