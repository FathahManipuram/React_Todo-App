

export default function formatDateTime(dt){

	 if(!dt) return "No deadline"

    return new Date(dt).toLocaleString("en-IN",{
      day:"2-digit",
      month:"2-digit",
      year:"numeric",
      hour:"numeric",
      minute:"2-digit",
      hour12: true,
    }).replace(/\//g,"-")

}