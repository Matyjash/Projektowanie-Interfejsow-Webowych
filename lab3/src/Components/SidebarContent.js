import React from 'react';
import PagesIcon from '@mui/icons-material/Pages';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AddCommentIcon from '@mui/icons-material/AddComment';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarContent = [
  {
    title: "Strona główna",
    icon: <PagesIcon />,
    link: "/home"
  },
  {
    title: "Lista ogłoszeń osób",
    icon: <FeaturedPlayListIcon />,
    link: "/ads"
  },
  {
    title: "Lista ogłoszeń grup",
    icon: <FeaturedPlayListIcon />,
    link: "/ads-group"
  },
  {
    title: "Dodaj ogłoszenie prywatne",
    icon: <AddCommentIcon />,
    link: "/add"
  },
  {
    title: "Dodaj ogłoszenie grupowe",
    icon: <AddCommentIcon />,
    link: "/add-group"
  },
  {
    title: "Informacje",
    icon: <InfoIcon />,
    link: "/info"
  }

];
