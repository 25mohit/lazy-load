import { FcCallback, FcVoicemail } from 'react-icons/fc'
import { BsGlobe } from 'react-icons/bs'
import { GiEyeOfHorus } from 'react-icons/gi'
import ShowDetail from '../ShowDetail/ShowDetail'
import { useEffect, useState } from 'react'
import LazyLoad from 'react-lazy-load'

const ProfileCard = ({ data }) => {
        const [show, setShow] = useState(false)

        useEffect(() => {
                document.addEventListener('keydown', handleKeyPress)
                return() => {
                        document.removeEventListener('keydown', handleKeyPress)
                }
        },[]) 

        const handleKeyPress = (e) => {
                if(e.keyCode == 27){
                        setShow(false)
                }
        }
  return (
    <div className='profile'>
            <div>
                    <span>{data?.username}</span>
            </div>
            <div>
                    <LazyLoad >
                        <img src={`https://avatars.dicebear.com/api/male/${data?.name}.svg`}/>
                    </LazyLoad>
            </div>
            <div className="details">
                    <div><h3>{data?.name}</h3></div>
                    <div><FcCallback id='icon'/><span>{data?.phone}</span></div>
                    <div><FcVoicemail id='icon' /><span>{data?.email}</span></div>
                    <div><BsGlobe id='globe'/><span>{data?.website}</span></div>
                    <div className="footer">
                            <GiEyeOfHorus onClick={() => setShow(true)} id='enter-icon'/>
                    </div>
            </div>
            {show && <ShowDetail data={data} onClose={() => setShow(false)} image={`https://avatars.dicebear.com/api/male/${data?.name}.svg`}/>}
    </div>
  )
}

export default ProfileCard