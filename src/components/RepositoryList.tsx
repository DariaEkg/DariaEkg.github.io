'use client';

import React from 'react';
import { Repository } from '../types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = ({ repositories }) => {
  if (!repositories.length) {
    return (
      <Typography variant="body1" component="div">
        No repositories found.
      </Typography>
    );
  }

  return (
    <List sx={{ width: '100%' }}>
      {repositories.map((repo) => (
        <React.Fragment key={repo.id}>
          <ListItem alignItems="flex-start" sx={{ gap: 2 }}>
            <ListItemAvatar>
              <Avatar>
                <GitHubIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <MuiLink
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="primary"
                  sx={{ fontWeight: 600, fontSize: '1rem' }}
                >
                  {repo.name}
                </MuiLink>
              }
              secondary={
                repo.description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {repo.description}
                  </Typography>
                )
              }
              sx={{ flex: 1 }}
            />

            <Box sx={{ display: 'flex', gap: 3, ml: 2, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <StarIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {repo.stargazers_count}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CallSplitIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {repo.forks_count}
                </Typography>
              </Box>
            </Box>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RepositoryList;
