# VSCode Notes

Yay new editor and environment.  

# Useful keybindings

* control-shift-backtick - open terminal in same directory as current file.

# Broken things I need to fix


# Things that drive me nuts

* definitely an editor for the ADD generation. So *much* grahicial activity everywhere.

* ~The box around the current line. I feel crowded.~  editor.renderLineHighlight to none
* The highligting around () delimiters.  Rarely do I want that. At least the kiss animation isn't the BRIGHT YELLOW thing that Xcode does.
    - editor.matchBrackets = never does turn off the highlighting. Does break the bracket kissing and double-click expanson
* ~Don't like the auto-insertion of close delimiter~ - editor.autoClosingBrackets = none

* Getting a terminal error on launch
    "Unable to resolve your shell environment: Unexpected exit code from spawned shell (code 1, signal null)"
* Has some emacs bindings, but not meta-key support (for moving )
* Minimap
* Wow - TINY slop on left side for selecting lines.  I keep hitting the collapse bar which I don't typically use
* The left vertical lines for indentation I don't think I need
* ~The "one pending change" badge for source code - I know I have pending changes because I'm working.~
    - Just hid the badge (right-click)
* The "dirty files" badge.  Im fine with the badge on the tab, but I don't need to know and have a stress-inducing badge telling me about it.
    - I am not alone - https://stackoverflow.com/questions/42042369/how-to-disable-blue-notification-badges-on-vs-code
    - someone mentioned "Zen Mode" _You would enjoy the Zen Mode of VS Code_
        - oh. Just full-screen
* highlighting the word the cursor is next to. What is the point?
    - Looks like default behavior if there's otherwise no other language support: https://github.com/Microsoft/vscode/issues/5351
    - moved to https://github.com/microsoft/vscode/issues/24426
    - editor.occurrencesHighlight - set to false
* It auto highlights 