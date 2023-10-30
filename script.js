
// function create element

let cover=document.querySelector('.cover')
let main=document.querySelector('main')
let wrapper=document.querySelector('.wrapper')
let replyComment=document.querySelector('.replycomment')
let body=document.querySelector('body')

// main comment
function createElement(content,score,image,name,time){
    let commentElement=document.createElement('section')
    commentElement.className='comments1'
    commentElement.innerHTML=`
    <div class='comments'>
        <div class='hi2'>
            <div class="sidenumber">
                <i class="fa-solid fa-plus"></i>
                <p class="paranumber">${score}</p>
                <i class="fa-solid fa-minus"></i>
            </div>
            <div class="reply">
                    <img src="images/icon-reply.svg" alt="replyicon">
                    <p>reply</p>
            </div>
        </div>
        <div class="maincontent">
            <div class="top">
                <div class="left">
                    <img src="${image}" alt="profilepic-${name}">
                    <h4>${name}</h4>
                    <p>${time}</p>
                </div>
                <div class="right">
                    <img src="images/icon-reply.svg" alt="replyicon">
                    <p class='rr'>reply</p>
                </div>
            </div>
            <p class="last">${content}</p>
        </div>
    </div>
    <div class="replyboxx">
            <img src="images/avatars/image-juliusomo.png" alt="">
            <form>
                <textarea name="com" id="box-rply" cols="30" rows="4" placeholder="Add a comment..."></textarea>
            </form>
            <button type="submit" class="rply">Reply</button>
    </div>
    `
    wrapper.appendChild(commentElement)

    let rpbox=commentElement.querySelector('.replyboxx')
    let rep1=commentElement.querySelector('.rr')
    let reply23=commentElement.querySelector('.reply')
    // replybutton
    rep1.addEventListener('click',()=>{
        rpbox.style.display='flex'
    })
    reply23.addEventListener('click',()=>{
        rpbox.style.display='flex'
    })
}

// bootom comment typing box
function user(){
    let commentBox=document.createElement('div')
    commentBox.className='commentbox'
    commentBox.innerHTML=`
    <img src="images/avatars/image-juliusomo.png" alt="">
    <form>
      <textarea name="com" id="box" cols="30" rows="4" placeholder="Add a comment..."></textarea>
    </form>
    <button type="submit">send</button>
    <div class='pro'>
        <img src="images/avatars/image-juliusomo.png" alt="">
        <button type="submit">send</button>
    </div>
    `
    main.appendChild(commentBox)
}
user()

// inside comment reply
function replyComments(content,replyto,image,score,name,time){
    let divReply=document.createElement('div')
    divReply.className='hello1'
    divReply.innerHTML=`
<div class='h'>
    <div class='hello'>
        <div class='hi'>
            <div class="sidenumber">
                <i class="fa-solid fa-plus"></i>
                <p class="paranumber">${score}</p>
                <i class="fa-solid fa-minus"></i>
            </div>
            <div class="right">
                <div class="delete">
                    <img src="images/icon-delete.svg" alt="deleteicon">
                    <p>Delete</p>
                </div>
                <div class="edit">
                   <img src="images/icon-edit.svg" alt="deleteicon">
                    <p>Edit</p>
                </div>
                <div class="reply">
                    <img src="images/icon-reply.svg" alt="replyicon">
                    <p>reply</p>
                </div>
            </div>
        </div>
        <div class="maincontent">
            <div class="top">
                <div class="left">
                    <img src="${image}" alt="profilepic-${name}">
                    <h4>${name}</h4>
                    <span>you</span>
                    <p>${time}</p>
                </div>
                <div class="right">
                    <div class="delete">
                        <img src="images/icon-delete.svg" alt="deleteicon">
                        <p>Delete</p>
                    </div>
                    <div class="edit">
                        <img src="images/icon-edit.svg" alt="deleteicon">
                        <p>Edit</p>
                    </div>
                    <div class="reply">
                        <img src="images/icon-reply.svg" alt="replyicon">
                        <p>reply</p>
                    </div>
                </div>
            </div>
            <p class="last"><span>@${replyto}</span> <span class='editable'> ${content}</span></p>
            <button class='update'>Update</button>
        </div>
    </div>
    <div class="replyboxx">
            <img src="images/avatars/image-juliusomo.png" alt="">
            <form>
                <textarea name="com" id="box-rply" cols="30" rows="4" placeholder="Add a comment..."></textarea>
            </form>
            <button type="submit" class="rply">Reply</button>
    </div>
</div>
`
    replyComment.appendChild(divReply)

    let replyElement=document.querySelector('.hello')
    let spanYou=divReply.querySelector('.hello .left span')
    let edit=divReply.querySelector('.hello .top .right .edit')
    let edit2=divReply.querySelector('.hi .right .edit')
    let delete2=divReply.querySelector('.hello .top .right .delete')
    let delete3=divReply.querySelector('.hi .right .delete')
    let cancel=document.querySelector('.cancel')
    let rep=divReply.querySelector('.top .reply')
    let repp1=divReply.querySelector('.hi .right .reply')
    let yesDelete=document.querySelector('.yesdelete')
    let editableText=divReply.querySelector('.hello .last')
    let updateText=divReply.querySelector('.hello .update')
    let repbox=divReply.querySelector('.h .replyboxx')
    let reply1=divReply.querySelector('.hi .right .reply')

    // checking user or not
    function collectSpan(){
        spanYou.style.display='none'
    }
    function editDelete(){
        edit.style.display='none'
        delete2.style.display='none'
        edit2.style.display='none'
        delete3.style.display='none'
    }
    function replycall(){
        let replyy=divReply.querySelector('.hello .top .right .reply')
        replyy.style.display='none'
        reply1.style.display='none'
    }
    function updateCall(){
        updateText.style.display='block'
    }
    function updateReturncall(){
        updateText.style.display='none'
    }
    if(name!=='juliusomo')
    {
        collectSpan()
        editDelete()
    }
    else{
        replycall()
    }

    // action of delete, update, reply
        delete2.addEventListener('click',()=>{
            body.classList.add('show')
            body.classList.add('show2')
            yesDelete.addEventListener('click',()=>{
                body.classList.remove('show')
                body.classList.remove('show2')
                divReply.style.display='none'
            })
        })
        delete3.addEventListener('click',()=>{
            body.classList.add('show')
            body.classList.add('show2')
            yesDelete.addEventListener('click',()=>{
                body.classList.remove('show')
                body.classList.remove('show2')
                divReply.style.display='none'
            })
        })
        cancel.addEventListener('click',()=>{
            body.classList.remove('show')
            body.classList.remove('show2')
        })
    
    // edit action
    edit.addEventListener('click',()=>{
        console.log('y')
        editableText.contentEditable=(editableText.contentEditable === 'true') ? 'false' : 'true'

        console.log(editableText.contentEditable)
        if(editableText.contentEditable==='true')
        {
            editableText.style.border='1px solid black'
            editableText.style.borderRadius='10px'
            editableText.style.backgroundColor='white'
            editableText.style.padding='20px'
            updateCall()
            updateText.addEventListener('click',()=>{
                editableText.innerHTML=editableText.innerHTML
                updateReturncall()
                editableText.style.border='none'
                editableText.style.padding='0'
                editableText.style.backgroundColor='transparent'
                editableText.contentEditable=!editableText.contentEditable
            })
        }
        else{
            editableText.style.border='none'
            editableText.style.backgroundColor='transparent'
        }
    })
    edit2.addEventListener('click',()=>{
        console.log('y')
        editableText.contentEditable=(editableText.contentEditable === 'true') ? 'false' : 'true'

        console.log(editableText.contentEditable)
        if(editableText.contentEditable==='true')
        {
            editableText.style.border='1px solid black'
            editableText.style.borderRadius='10px'
            editableText.style.backgroundColor='white'
            editableText.style.padding='20px'
            updateCall()
            updateText.addEventListener('click',()=>{
                editableText.innerHTML=editableText.innerHTML
                updateReturncall()
                editableText.style.border='none'
                editableText.style.padding='0'
                editableText.style.backgroundColor='transparent'
                editableText.contentEditable=!editableText.contentEditable
            })
        }
        else{
            editableText.style.border='none'
            editableText.style.backgroundColor='transparent'
        }
    })
    
    // reply action
    rep.addEventListener('click',()=>{
        repbox.style.display='flex'
    })
    reply1.addEventListener('click',()=>{
        repbox.style.display='flex'
    })
    
}



// fetching data
fetch('data.json')
.then(response=>{
    if(!response.ok)
    {
        console.log('error',response.status)
    }
    return response.json()
})
.then(data=>{
    console.log(data)
    let comment=data.comments
    console.log(comment)
    // iteration
    for(let i=0; i<comment.length; i++)
    {
        let content=comment[i].content
        let score=comment[i].score
        let image=comment[i].user.image.png
        let name=comment[i].user.username
        let time=comment[i].createdAt
        createElement(content,score,image,name,time)
        if(comment[i].replies.length!==0)
        {
            let repl=comment[i].replies
            for(let j=0; j<repl.length; j++)
            {
                let content2=repl[j].content
                let replyto=repl[j].replyingTo
                let image2=repl[j].user.image.png
                let score2=repl[j].score
                let name2=repl[j].user.username
                let time2=repl[j].createdAt
                replyComments(content2,replyto,image2,score2,name2,time2)
               
            }
        }
    }
})
