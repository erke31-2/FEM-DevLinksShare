const LoadingLayout = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-80 flex justify-center items-center z-20">
        <div className="w-10 h-10 rounded-full border-2 border-t-cardBg animate-spin"/>
      </div>
  )
}
export default LoadingLayout