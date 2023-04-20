import { Restaurant } from '../details/page';
import s from './styles.module.scss';

interface Props{
    id: number
}

export function Images({images}: {images: string[]}){
    return(
        <div className={s.imgWrapper} >
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
            {images.length} photo{images.length  > 1 ? "s" :''}
        </h1>
        <div >
            {images.map(img=>(
                    <img
                    src={img}
                    alt=""
                    key={img}
                    />
                )
            )}
        </div>
        </div>
    )
}