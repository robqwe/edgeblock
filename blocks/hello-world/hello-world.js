import { importBlockConfig } from '../scripts/aem.js';
export default function decorate(block) {
  importBlockConfig(block).textContent;
}
