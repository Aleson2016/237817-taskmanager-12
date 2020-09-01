import {createSiteMenuTemplate} from "./view/site-menu.js";

import {createSiteFilterTemplate} from "./view/filter.js";

import {createSiteBoardTemplate} from "./view/board.js";

import {createSiteSortingTemplate} from "./view/sorting.js";

import {createTaskTemplate} from "./view/task.js";

import {createButtonTemplate} from "./view/load-more-button.js";

const TASK_COUNT = 8;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainContainer = document.querySelector(`.main`);

const siteHeaderContainer = siteMainContainer.querySelector(`.main__control`);

render(siteHeaderContainer, createSiteMenuTemplate(), `beforeend`);

render(siteHeaderContainer, createSiteFilterTemplate(), `afterend`);

const siteFilterContainer = siteMainContainer.querySelector(`.main__filter`);

render(siteFilterContainer, createSiteBoardTemplate(), `afterend`);

const siteBoardContainer = siteMainContainer.querySelector(`.board`);

render(siteBoardContainer, createSiteSortingTemplate(), `afterbegin`);

const siteTasksContainer = siteMainContainer.querySelector(`.board__tasks`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTasksContainer, createTaskTemplate(), `afterbegin`);
}

render(siteBoardContainer, createButtonTemplate(), `beforeend`);
