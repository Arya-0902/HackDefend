import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/18/logo.png",
    name: "Linux Fundamentals",
    author: "Cry0l1t3, Knightmare",
    price: 219,
    originalPrice: 699,
    isBestSeller: true,
    category: "general",
    rating: 4.6,
    categoryTitle: "General",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/34/logo.png",
    name: "Introduction to Networking",
    author: "Cry0l1t3, ippsec-3",
    price: 250,
    originalPrice: 799,
    isBestSeller: false,
    category: "general",
    rating: 4,
    categoryTitle: "General",
  },

  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/25/logo.png",
    name: "Kerberos Attacks",
    author: "pixis",
    price: 400,
    originalPrice: 950,
    isBestSeller: false,
    category: "offensive",
    rating: 2,
    categoryTitle: "Offensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/21/logo.png",
    name: "Introduction to Bash Scripting",
    author: "007JamesBond",
    price: 390,
    originalPrice: 599,
    isBestSeller: true,
    category: "general",
    rating: 4.8,
    categoryTitle: "General",
  },

  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/211/logo.png",
    name: "Security Monitoring and SIEM Fundamentals",
    author: "Slavi Parpulev",
    price: 600,
    originalPrice: 1099,
    isBestSeller: false,
    category: "defensive",
    rating: 4,
    categoryTitle: "Defensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/214/logo.png",
    name: "Intro to Threat hunting & Hunting with Elastic",
    author: "GodFather",
    price: 350,
    originalPrice: 899,
    isBestSeller: false,
    category: "defensive",
    rating: 2,
    categoryTitle: "Defensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/216/logo.png",
    name: "Windows event logs & Finding evil",
    author: "RobSH",
    price: 119,
    originalPrice: 250,
    isBestSeller: false,
    category: "defensive",
    rating: 3,
    categoryTitle: "Defensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/20/logo.png",
    name: "Cracking Passwords with HASHCAT",
    author: "mrb3n, ippsec-3, MinatoTW",
    price: 157,
    originalPrice: 459,
    isBestSeller: false,
    category: "offensive",
    rating: 3,
    categoryTitle: "Offensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/31/logo.png",
    name: "Stack Based BufferOverflows on Linux x86 ",
    author: "$$ns",
    price: 163,
    originalPrice: 399,
    isBestSeller: false,
    category: "offensive",
    rating: 2.5,
    categoryTitle: "Offensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/176/logo.png",
    name: "Windows Attacks and Defence",
    author: "Johnylooper",
    price: 699,
    originalPrice: 1299,
    isBestSeller: false,
    category: "defensive",
    rating: 4,
    categoryTitle: "Defensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/85/logo.png",
    name: "Intro to Assembly Language",
    author: "21y4d",
    price: 399,
    originalPrice: 750,
    isBestSeller: false,
    category: "general",
    rating: 3.5,
    categoryTitle: "General",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/27/logo.png",
    name: "DNS Enumeration using Python",
    author: "Cry0l1t3",
    price: 243,
    originalPrice: 699,
    isBestSeller: false,
    category: "general",
    rating: 1,
    categoryTitle: "General",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/41/logo.png",
    name: "Javascript Deobfuscation",
    author: "M0jis",
    price: 799,
    originalPrice: 999,
    isBestSeller: false,
    category: "defensive",
    rating: 4,
    categoryTitle: "Defensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/22/logo.png",
    name: "Active Directory LDAP",
    author: "W0rm32",
    price: 99,
    originalPrice: 399,
    isBestSeller: true,
    category: "offensive",
    rating: 5,
    categoryTitle: "Offensive",
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/112/logo.png",
    name: "Footprinting",
    author: "L1nkesh",
    price: 800,
    originalPrice: 999,
    isBestSeller: false,
    category: "offensive",
    rating: 4.8,
    categoryTitle: "Offensive",
  },
];