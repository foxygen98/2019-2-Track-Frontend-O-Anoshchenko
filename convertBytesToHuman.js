export default function convertBytesToHuman(bytes) {
  if (typeof(bytes) != "number" || !isFinite(bytes) || bytes < 0)
    return(false);
  let units = ['B', 'KB', 'MB', 'GB', 'TB']
  for (let i = 0; i < units.length; i++) {
    if (bytes < 1024)
      return(+bytes.toFixed(2) + ' ' + units[i]);
    bytes /= 1024;
  }
}