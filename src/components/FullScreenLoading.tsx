const FullScreenLoading = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-cardBg">
      <div className="flex gap-x-1">
        <div className="w-4 h-4 rounded-full bg-btnBg animate-bounce" />
        <div className="w-4 h-4 rounded-full bg-btnBg animate-bounce" style={{animationDelay: "0.1s"}}/>
        <div className="w-4 h-4 rounded-full bg-btnBg animate-bounce" style={{animationDelay: "0.2s"}}/>
      </div>
    </section>
  )
}
export default FullScreenLoading