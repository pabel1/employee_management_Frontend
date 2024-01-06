import { FiUserCheck, FiUsers } from "react-icons/fi";
import { RiFileUserFill, RiShieldUserFill, RiUserFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbTableFilled } from "react-icons/tb";
export const navbarData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Users",
    link: "/users",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Tasks",
    link: "/tasks",
  },
  {
    title: "Reporting",
    link: "/reporting",
  },
];

export const navData = [
  {
    stackName: "Overview",
    data: [
      {
        title: "Dashboard",
        link: "/",
        permission: ["All"],
        icon: RxDashboard,
      },
    ],
  },
  {
    stackName: "Management",

    data: [
      {
        title: "Users",
        link: "/users",
        icon: FiUsers,
        permission: ["All"],
        children: [
          {
            title: "All users",
            link: "/users/all-users",
            permission: ["Administrator", "Supervisor"],
            icon: RiUserFill,
          },
        ],
      },
    ],
  },

  {
    stackName: "Others",
    data: [
      {
        title: "Role ",
        permission: ["Administrator", "Supervisor"],
        link: "/roles/user/request-role",
        icon: FiUserCheck,
        children: [
          {
            title: "User Role",
            link: "/roles",
            permission: ["Administrator", "Supervisor"],
            icon: RiShieldUserFill,
          },
          {
            title: "Admin Roles",
            link: "/roles/all-roles",
            permission: ["Administrator", "Supervisor"],
            icon: RiFileUserFill,
            roles: ["Admin", "Super Admin"],
          },
          {
            title: "Role Request",
            link: "/roles/role-request",
            icon: TbTableFilled,
            permission: ["Administrator", "Supervisor"],
            roles: ["Admin", "Super Admin"],
          },
        ],
      },
    ],
  },
];
