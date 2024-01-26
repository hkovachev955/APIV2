// const { clsx } = require("clsx");
// const { twMerge } = require("tailwind-merge");

// /**
//  * @typedef {import('@/types/item').Item} Item
//  * @typedef {import('clsx').ClassValue} ClassValue
//  */

// /**
//  * Combines class values using Tailwind's merge utility.
//  * @param {...ClassValue[]} inputs - Class values to be combined.
//  * @returns {string} - Combined class string.
//  */
// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

/**
 * Converts a hyphenated string to a title-cased string with spaces.
 * @param {string} text - Hyphenated string to convert.
 * @returns {string} - Title-cased string.
 */
function pathToName(text) {
  return text
    .split("-") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a string with spaces
}

/**
 * Converts item names to an array of Item objects.
 * @param {string} section - Section name.
 * @param {string[]} itemNames - Array of item names.
 * @returns {Item[]} - Array of Item objects.
 */
function itemNamesToItems(section, itemNames) {
  const sortedByName = itemNames.sort((a, b) => a.localeCompare(b));

  return sortedByName.map((name, index) => {
    const imgUrl = itemNameToImgUrl(section, name);
    return {
      name,
      imgUrl: `${imgUrl}.webp`,
      id: imgUrl,
    };
  });
}

/**
 * Checks if the current browser is Safari.
 * @returns {boolean} - True if the browser is Safari, false otherwise.
 */
function isSafari() {
  return (
    navigator.vendor.match(/apple/i) &&
    !navigator.userAgent.match(/crios/i) &&
    !navigator.userAgent.match(/fxios/i) &&
    !navigator.userAgent.match(/Opera|OPT\//)
  );
}

/**
 * Converts item name to image URL.
 * @param {string} section - Section name.
 * @param {string} name - Item name.
 * @returns {string} - Item image URL.
 */
function itemNameToImgUrl(section, name) {
  return `/${section}/${name
    .toLowerCase()
    .replace(/-/g, "_")
    .replace(/\s+/g, "-")}`;
}

// Exporting functions and constants
module.exports = {
  pathToName,
  itemNameToImgUrl,
  itemNamesToItems,
  isSafari,
};
