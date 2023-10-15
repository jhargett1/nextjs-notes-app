# Notes App

This is a note taking app built with Next.js, React, and Tailwind CSS.

## Pages

**page.tsx**

- Main app component that renders child components
- Manages state for:
  - notes array
  - selected color
  - modal open state
  - editing note content/id
- Renders:
  - ExampleSideNavBar
  - NotesGrid
  - NoteModal conditionally
- Provides open/close handlers for modal

**layout.tsx**

- Provides basic page wrapper with layout
- Renders page children content

**HeaderNav.tsx**

- Header navigation component
- Dropdown menus for filtering
- Renders logo, search, menu links

**Note.tsx**

- Defines Note interface for type safety
- Renders formatted note content
- Truncates long text using CSS

**NoteGrid.tsx**

- Displays grid layout of notes
- Opens edit modal when note clicked
- Manages editing state

**DatePicker.tsx**

- Wraps Flowbite datepicker component
- Allows selecting date range filter

**ExampleSideNav.tsx**

- Side navigation menu
- Adds new notes when color clicked
- Manages menu open state

**NoteModal.tsx**

- Modal popup to create/edit notes
- Handles form content and submission
- Saves new note or updates existing

**TimeStampButton.tsx**

- Button displaying note timestamp
- Click to open edit modal for note

## Usage

To run the app locally:

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. App will be running on `localhost:3000`

Main functionality:

- Click side menu colors to add color categorized notes
- Each note has functionality to edit content and recategorize note color

## Future implementations/continued work

This was my first time working with the NextJS framework. Had a lot of difficulty maintaining state, but working through the issues as they come along.

I would like to add a MongoDB as the backend to help deal with passing note props between components.

Also, currently the header navigation is non-functional. Hooking the application to a MongoDB will allow the header navigation's filtering to be implemented much easier.

## License

This project is open source and available under the [MIT License](LICENSE).
