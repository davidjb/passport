augroup LOCAL_SETUP
au!
    autocmd BufNewFile,BufRead *.js setlocal filetype=javascript.jsx
    autocmd Filetype javascript let g:syntastic_javascript_checkers = ['standard']
augroup END
