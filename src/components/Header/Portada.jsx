import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './DataImg'


function Portada() {
    const [imagen, setimagen] = useState(data);
    const [index, setIndex] = React.useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > imagen.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = imagen.length - 1
            }
            return index
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > imagen.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className='section'>
            <div className='section-center'>
                {imagen.map((img, imgIndex) => {
                    const { id, image, name } = img

                    let position = 'nextSlide'
                    if (imgIndex === index) {
                        position = 'activeSlide'
                    }
                    if (
                        imgIndex === index - 1 ||
                        (index === 0 && imgIndex === imagen.length - 1)
                    ) {
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='img-img' />
                        </article>
                    )
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Portada