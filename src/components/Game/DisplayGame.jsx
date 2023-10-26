import React, { useState, useRef, Fragment } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import ReactHtmlParser from 'react-html-parser';

function sanitize(str) { return str.toString().replace(/"/g, '&quot;') };

export default function RenderGame({ game }) {

    const data = sanitize(game);
    return (
        <>
            <div style={{ color: "white", }} dangerouslySetInnerHTML={{
                __html:
                    `<iframe
                    width = "1400px"
                    title = "game"
                    srcdoc = "${data}"
                    onload = "
                    this.width = (this.contentWindow.document.body.scrollWidth).toString();
                    this.height = (700).toString();
                    "
                    scrolling = "no"
                    style = "border: none;">
                    </iframe>`
            }}>
            </div>

        </>
    )
}