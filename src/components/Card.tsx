import { Star } from 'lucide-react';

const Card = () => {
    return (

        <div className='border p-8 rounded-lg'>
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" className='w-[330px] h-[250px] object-cover' alt="" />
            <div className='text-start font-bold text-lg'>
                <h2>Canon Model-XR 500 pt 100 Megapixel</h2>
                <p>Case,Starlight Sport</p>
                <div className='flex justify-start gap-2'>
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Star className="w-6 h-6 text-yellow-500" />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-lg'>$599</p>
                <button className='font-bold bg-pink-400 text-white' >Buy Now</button>
            </div>

        </div>

    )
}

export default Card