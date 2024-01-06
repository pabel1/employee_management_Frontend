const PasswordLevelChecker = ({ passwordLabel }) => {
  return (
    <div className="grid grid-cols-6 gap-3 mt-4">
      {passwordLabel === "very weak" ? (
        <>
          <div className="bg-red-500 h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
        </>
      ) : passwordLabel === "weak" ? (
        <>
          <div className="bg-red-500 h-1 rounded-md" />
          <div className="bg-red-500 h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
        </>
      ) : passwordLabel === "medium" ? (
        <>
          <div className="bg-yellow-500 h-1 rounded-md" />
          <div className="bg-yellow-500 h-1 rounded-md" />
          <div className="bg-yellow-500 h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
        </>
      ) : passwordLabel === "strong" ? (
        <>
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
          <div className="bg-[#F3F3F3] h-1 rounded-md" />
        </>
      ) : passwordLabel === "very strong" ? (
        <>
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
          <div className="bg-green-500 h-1 rounded-md" />
        </>
      ) : null}
    </div>
  );
};

export default PasswordLevelChecker;
