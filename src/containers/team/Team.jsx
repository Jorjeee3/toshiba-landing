import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Title from '../../components/title/Title';

import haryImage from '../../assets/images/team/harry.png'
import buiImage from '../../assets/images/team/bui.png'
import binhImage from '../../assets/images/team/binh.png'
import lisaImage from '../../assets/images/team/lisa.png'

import 'swiper/css/bundle'
import './team.scss'

const teamMembers = [
    {
        id: 1,
        name: 'Harry Pham',
        photo: haryImage,
        position: 'Founder and CEO'
    },
    {
        id: 2,
        name: 'Bui Cai',
        photo: buiImage,
        position: 'Co-founder and CTO'
    },
    {
        id: 3,
        name: 'Binh Mai',
        photo: binhImage,
        position: 'Blockchain expert'
    },
    {
        id: 4,
        name: 'Lisa Dowen',
        photo: lisaImage,
        position: 'Marketing and funnels'
    }
]

function Team() {
  return (
    <section className='section-team' id='team'> 
        <div className="container">
            <div className="team-content">
            <Title
                children='Team'
                align='center'
                marginBottom='60px' 
            />
            <Swiper
                
                modules={[ Pagination ]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                pagination={{ clickable: true }}

                breakpoints={{
                    // when window width is >= 640px
                    320: {
                    // width: 320,
                    slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                    slidesPerView: 2,
                    },
                    1500: {
                    slidesPerView: 3,
                    },
                }}
            >
                {teamMembers.map(teamMember => {
                    return (
                        <SwiperSlide>
                            <div className='team-slide-content' key={teamMember.id}>
                                <div className="slide-image-wrapper">
                                    <img 
                                        src={teamMember.photo} 
                                        alt={teamMember.name}
                                        className='team-slide-image'
                                    />
                                </div>
                                <span className='team-slide-name' >{teamMember.name}</span>
                                <small className='team-slide-position' >{teamMember.position}</small>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Team