import { useState } from 'react'

export default function Dweetbox() {
    const [userDweet, setUserDweet] = useState('')
    const [hashtag, setHashtag] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = localStorage.getItem('user')
        const id = JSON.parse(user).id
        fetch('/api/dweets/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dweet: userDweet, id: id, hashtag: hashtag })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUserDweet('')
                setHashtag('')
            })
    }
    return (
        <>
            <div className="container-fluid border rounded ms-3 border-secondary-subtle my-3 text-center p-3 bg-gradient " >
                <form className='col ms-5' onSubmit={handleSubmit}>
                    <label className='row ms-4 my-3' >What's Happening</label>
                    <textarea className='row rounded ms-2' name="dweet" id="" rows="3" value={userDweet} onChange={e => setUserDweet(e.target.value)} ></textarea>
                    <input className='row w-50 ms-4 my-2' rows='3' type="text" name='hashtag' value={hashtag} onChange={e=>setHashtag(e.target.value)} placeholder='Hashtag' />
                    <button className='row mt-2 me-5 btn btn-primary ' type="submit">Dweet</button>
                </form>
            </div>
        </>
    )

}
