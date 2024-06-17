interface Row {
  title: string;
  icons: Icon[];
}

interface Icon {
  image: string;
  label: string;
  onClick?: () => void;
}
