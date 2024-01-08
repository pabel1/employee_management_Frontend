import { FiUserCheck, FiUsers } from "react-icons/fi";
import { RiFileUserFill, RiShieldUserFill, RiUserFill } from "react-icons/ri";
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
    stackName: "Management",

    data: [
      {
        title: "Employee",
        link: "/employee",
        icon: FiUsers,
        permission: ["Administrator", "Supervisor"],
        children: [
          {
            title: "All Employee",
            link: "/employee/all-employee",
            permission: ["Administrator", "Supervisor"],
            icon: RiUserFill,
          },
        ],
      },
      {
        title: "Shift",
        link: "/shift",
        icon: FiUsers,
        permission: ["Administrator", "Supervisor"],
        children: [
          {
            title: "All Shifts",
            link: "/shifts",
            permission: ["Administrator", "Supervisor"],
            icon: RiUserFill,
          },
          {
            title: "My Shift",
            link: "/my-shift",
            permission: ["Administrator", "Supervisor", "Employee"],
            icon: RiUserFill,
          },
          // {
          //   title: "Assign Shift",
          //   link: "/assign-shifts",
          //   permission: ["Administrator", "Supervisor","Employee"],
          //   icon: RiUserFill,
          // },
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

export const tableHeading = [
  "Shift Name",
  "Shift Time",
  "Date",
  "Assign Employee",
];
