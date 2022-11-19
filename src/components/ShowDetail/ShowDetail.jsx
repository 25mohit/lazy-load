import React from 'react'
import { GiCrossMark } from 'react-icons/gi'

const ShowDetail = ({ image, onClose, data }) => {
    
  return (
    <div className='show-detail'>
        <div className="container">
            <div className="top"><GiCrossMark id='close' onClick={onClose}/></div>
            <div className="body">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2>{data?.name}&nbsp; (&nbsp;{data?.username}&nbsp;)</h2>
                    <p>Company : {data?.company?.name},&nbsp;{data?.company?.bs}</p>
                    <p>{data?.email}</p>
                    <p>{data?.website}</p>
                    <p>{data?.phone}</p>
                    <p>Address : {data?.address?.suite},&nbsp;{data?.address?.street}, {data?.address?.city}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowDetail