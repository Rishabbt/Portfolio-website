export type NavLink = {
  id: number;
  url: string;
  label: string;
  isExternal?: boolean;  // ← this must be here
};

export const NavLinks: NavLink[] = [

    {
        id:1,
        url:"#home",
        label:"Home",
    },

    
    {
        id:2,
        url:"#Project",
        label:"Project",
    },

    {
        id:3,
        url:"Resume_RT.pdf",
        label:"Resume",
         
    },

   

    {
        id:4,
        url:"#Skill",
        label:"Skills",
    },

    
    {
        id:5,
        url:"#Contact",
        label:"Contact",
    },
];