import React from "react";
import './styles.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image01 from '../../assets/images/logo-bg.png';
import image02 from '../../assets/images/banner canal.png';
import image03 from '../../assets/images/anim_canal.gif';
import image04 from '../../assets/images/prision_room.png';
import image05 from '../../assets/images/Lizard_Warrior.png';
import image06 from '../../assets/images/GIRL_AND_MONSTER.png';
import image07 from '../../assets/images/Big-Monster-In-Predio.png';
import image08 from '../../assets/images/froger.png';
import image09 from '../../assets/images/prision_cave.png';
import image10 from '../../assets/images/Karliene.png';
import image11 from '../../assets/images/Figueiredo HeadSet.png';
import image12 from '../../assets/images/jacob.gif';
import image13 from '../../assets/images/timer.gif';
import image15 from '../../assets/images/the_guardian.gif';


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function Arts() {
  return (
    <div className="arts" id="arts">
      <h2>Arts</h2>
      <div className="arts">
            <ImageList
                sx={{ width: '100%' }}
                variant="quilted"
                cols={4}
                >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
      </div>
    </div>
  );
}


const itemData = [
    {
      img: image01,
      title: 'Logo Profile',
      rows: 2,
      cols: 2,
    },
    {
      img: image03,
      title: 'Animation Cat',
      cols: 2,
    },
    {
      img: image02,
      title: 'Banner Profile',
      cols: 2,
    },
    {
      img: image04,
      title: 'Prision of Nightmare - Room',
      cols: 2,
    },
    {
      img: image05,
      title: 'Lizard',
      rows: 2,
      cols: 2,
    },
    {
      img: image06,
      title: 'Monster and Girl',
    },
    {
      img: image07,
      title: 'Worms',
    },
    {
      img: image08,
      title: 'Froger',
      rows: 2,
      cols: 2,
    },
    {
      img: image10,
      title: 'Karly',
    },
    {
      img: image11,
      title: 'Math',
    },
    {
      img: image09,
      title: 'Cave',
      cols: 2,
    },
    {
        img: image13,
        title: 'Timer',
    },
    {
        img: image15,
        title: 'The Guardian',
    },
    {
        img: image12,
        title: 'Jacob',
        cols: 2,
        rows: 2,
    },
    
  ];