# VSCode Notes

Yay new editor and environment.  

# Useful keybindings

* control-shift-backtick - open terminal in same directory as current file.
* command-option left/right - move through files in tab bar
    * control 1, control 2, etc to switch between tabs
* Split editor - command-backslash (vertically), command-K command-backslash horizontally
    - but doesn't work well.  Non-obvious (I can't figure it out) how to easily switch that editor to another file
* control-space - Show completions
* control-backtick - go to terminal / return to editor and close terminal
    - not a true "go back to editor" that I could find, so control-1/2 would be it


# Broken things I need to fix

* ~Can't center current line in editor.~
    - not a feature.  huh.  There exists an extension - https://marketplace.visualstudio.com/items?itemName=kaiwood.center-editor-window

# Things that drive me nuts

* ~don't seem to see an equivalent for Quick Open~ - command-P is close enough
    - command-option/left/right somewhat useful
    - control-tab is pretty worthless - can't type to get to a file. either have to mouse (I want to be able to do the bulk of my work totally mouse free) or use a number to go to a particular tab
* definitely an editor for the ADD generation. So *much* grahicial activity everywhere.
* ~The box around the current line. I feel crowded.~  editor.renderLineHighlight to none
* The highligting around () delimiters.  Rarely do I want that. At least the kiss animation isn't the BRIGHT YELLOW thing that Xcode does.
    - editor.matchBrackets = never does turn off the highlighting. Does break the bracket kissing and double-click expanson
* ~Don't like the auto-insertion of close delimiter~ - editor.autoClosingBrackets = none
* Getting a terminal error on launch
    - "Unable to resolve your shell environment: Unexpected exit code from spawned shell (code 1, signal null)"
    - supposedly fixed, but still broken for me.  I need to run `code` from mac terminal to get the right enviornment
* Has some emacs bindings, but not meta-key support (for moving )
* Minimap
* Wow - TINY slop on left side for selecting lines.  I keep hitting the collapse bar which I don't typically use
* The left vertical lines for indentation I don't think I need.  editor.indent
* ~The "one pending change" badge for source code - I know I have pending changes because I'm working.~
    - Just hid the badge (right-click) since I do all my gitstuff outside of the editor
* The "dirty files" badge.  Im fine with the badge on the tab, but I don't need to know and have a stress-inducing badge telling me about it.
    - I am not alone - https://stackoverflow.com/questions/42042369/how-to-disable-blue-notification-badges-on-vs-code
    - someone mentioned "Zen Mode" _You would enjoy the Zen Mode of VS Code_
        - oh. Just full-screen
* ~highlighting the word the cursor is next to. What is the point?~
    - Looks like default behavior if there's otherwise no other language support: https://github.com/Microsoft/vscode/issues/5351
    - moved to https://github.com/microsoft/vscode/issues/24426
    - editor.occurrencesHighlight - set to false
* ~It auto highlights *everywhere* when I make a selection.~ - editor.selectionHighlight
* omg the autocomplete is aggressive.
    - Editor quick suggestions delay.  cranked it up to 10 seconds
    - "editor.quickSuggestions": { "other": false, "comments": false, "strings": false },
    - but still showing up
* has control-K, but not yank :-(
* The aggressive error squiggles are stress-inducing
* ~The aggressive hover stuff is stress-inducing~ - editor.hover.delay
* Turn off all syntax highlighting with
```
"files.associations": {
    "*.*": "plaintext",
},
```
