package com.dfs.corporate_portal.service;

import com.dfs.corporate_portal.repository.Position;
import com.dfs.corporate_portal.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {

    @Autowired
    private PositionRepository positionRepository;

    public List<Position> getAllPositions() {
        return positionRepository.findAll();
    }

    public Position getPositionByName(String name) {
        return positionRepository.findByName(name).orElse(null); // Обработка Optional
    }
}
