/**
 * config captcha generation options
 */
declare class ConfigObject {
	/**
	 * The cookie name used to store the challenge
	 */
	cookie?: string;
	/**
	 * default: true
	 * The length of the random string
	 */
	size?: number;
	/**
	 * width of captcha
	 */
	width?: number;
	/**
	 * height of captcha
	 */
	height?: number;
	/**
	 * captcha text size
	 */
	fontSize?: number;
	/**
	 * random character preset
	 */
	charPreset?: string;
	/**
	 * default: false
	 * if false, captcha will be black and white
	 * otherwise, it will be randomly colorized
	 */
	color?: boolean;
	/**
	 * default: false
	 * if set to true, it will draw with light grey color
	 * use if you have a site with dark theme
	 * only active when color is set to false
	 */
	inverse?: boolean;
	/**
	 * default: 1
	 * number of noise lines
	 */
	noise?: number;
	/**
	 * default: white
	 * background color of svg image
	 */
	background?: string;
}
/**
 * result of captcha generation
 */
interface CaptchaObj {
	/**
	 * the captcha text,
	 * store this in your session
	 */
	text: string;
	/**
	 * the svg image in string,
	 * set type of image/svg before send to client side
	 */
	data: string;
	/**
	 * The middleware to generate the image
	 */
	image: () => (req: any, res: any) => void;
	/**
	 * The middleware to generate the math image
	 */
	math: () => (req: any, res: any) => void;
	/**
	 * Checks the captcha challenge
	 */
	check: (req: any, text: string, caseSensitive: boolean) => boolean;
	/**
	 * Loads a font via url
	 */
	loadFont: (url: string) => void;
}
/**
 * This method returns a object that has two props:
 * data: svg image string
 * text: captcha text
 * @param {ConfigObject} [options]
 * @return {CaptchaObj}
 */
export function create(options?: ConfigObject): CaptchaObj;
/**
 * Override the default font with your own
 * @param {string} url
 */
export function loadFont(url: string): void;
/**
 * captcha generation global setting
 */
export const options: ConfigObject;
/**
 * return a random string
 * @param {number} size
 * @return {string}
 */
export function randomText(size: number): string;
