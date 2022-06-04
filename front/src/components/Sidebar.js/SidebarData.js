import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
  
  {
    title: 'Projets',
    icon: <AiIcons.AiOutlineProject />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Afficher la liste',
        path: '/admin/dashboard/projets',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Ajouter',
        path: '/admin/dashboard/projets/add',
        icon: <MdIcons.MdNoteAdd />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Equipes',
    path: '/admin/dashboard/team',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Afficher la liste',
        path: '/admin/dashboard/equipes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Ajouter',
        path: '/admin/dashboard/equipes/add',
        icon: <MdIcons.MdNoteAdd />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Collaborateurs',
    icon: <MdIcons.MdOutlineAccountCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Afficher la liste',
        path: '/admin/dashboard/comptes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Ajouter',
        path: '/admin/dashboard/comptes/add',
        icon: <MdIcons.MdNoteAdd />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Statistiques',
    icon: <IoIcons.IoIosStats />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav :[
      {
        title:'Afficher',
        path:'/admin/dashboard',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]

  }

];