

export const MyWatchList = () => {
    const [ads, setAds] = useState(() => {
      const data = localStorage.getItem("ads");
      return data ? JSON.parse(data) : [];
    });
  
    useEffect(() => {
      localStorage.setItem("ads", JSON.stringify(ads));
    }, [ads]);
}