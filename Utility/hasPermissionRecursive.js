export const hasPermissionRecursive = (item, userRole) => {
  if (!item.permission) {
    return true;
  }

  if (item.permission.includes("All")) {
    return true;
  }

  return item.permission.includes(userRole);
};
