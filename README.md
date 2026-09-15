# Film Folio

## Project Overview

Film Folio is a React prototype created in response to the Directors Notes Film Folio brief.

The project explores a clear and accessible way for visitors to browse fictional films, understand their essential information and reveal their credits.

## Intended Visitor

Someone reading about films who wants to quickly discover key information such as:

- Film title
- Short description
- Runtime
- Form
- Country
- Credits

## Current Prototype

The prototype now uses a fictional archive containing 180 films.

Visitors can:

- Browse films as reusable React cards
- Search films by title
- Filter films by form
- See how many films match the current search and filter
- Reveal a film's credits directly inside its card
- Keep the most recently revealed credits after refreshing the page
- Use the interface on narrow and wide screen sizes

A helpful message is also shown when no films match the current search.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Vite
- JSON
- localStorage
- Git and GitHub

## React Structure

Film information is stored in a JSON dataset rather than being hard-coded individually in `App.jsx`.

React uses `.map()` to create a reusable `FilmCard` for each film.

Application state is used for:

- Search text
- Selected film form
- Selected credits

The selected credits are saved to `localStorage` so they can survive a browser refresh.

## Data

The prototype uses the fictional film archive supplied with the Creative Process Software Development Bootcamp.

No production Directors Notes archive data, photographs, film stills or other protected Directors Notes assets are used.

## Interface and Accessibility

The interface includes:

- Responsive CSS Grid
- Clear visual hierarchy
- Search and filtering controls
- Visible button hover states
- Visible keyboard focus states
- A no-results message
- Credits displayed close to the action that reveals them

## Testing and Stabilisation

During Week 7 the prototype was tested for:

- Search and filtering
- Credits interaction
- Persistence after refresh
- No-results behaviour
- Responsive layout
- Existing behaviour after new changes

The project also successfully passed:

```text
npm run lint